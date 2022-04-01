import NaijaStates from "naija-state-local-government";
import { CategoryValue } from "../interfaces";

/**
 * looping through states array to get a particular state
 */
export const getStates = () => {
  const allStates = NaijaStates.all();
  const states = allStates.map((item: any) => item.state);
  let arrOfStates: CategoryValue[] = [];
  for (let i = 0; i < states.length; i++) {
    let newState: any = new Object();
    newState.value = states[i];
    newState.text = states[i];
    arrOfStates.push(newState);
  }
  return arrOfStates;
};

/**
 * looping through lgas array to get a particular lga
 */
export const getLga = (lga: any) => {
  const allLga = lga.lgas;
  let newLgas: CategoryValue[] = [];
  for (let i = 0; i < allLga.length; i++) {
    let newLga: any = new Object();
    newLga.value = allLga[i];
    newLga.text = allLga[i];
    newLgas.push(newLga);
  }
  return newLgas;
};

export const capitalizeFirstLetter = (word: string) => {
  return word?.charAt(0).toUpperCase() + word?.slice(1);
};

export class FileTypeValidator {
  private fileType: string;
  private validTypes: string[];

  constructor(fileType: string, validTypes: string[]) {
    this.fileType = fileType;
    this.validTypes = validTypes;
  }

  validateFileType(): boolean {
    return this.validTypes.includes(this.fileType);
  }

  getErrorMessage(): string {
    return `${this.fileType} is not an accepted file type.`;
  }
}

export class DocumentFileSizeValidator {
  private fileSizeInBytes: number;
  private maxFileSizeInBytes: number = 2048000;

  constructor(fileSize: number) {
    this.fileSizeInBytes = fileSize;
  }

  validateFileSize(): boolean {
    return this.fileSizeInBytes <= this.maxFileSizeInBytes;
  }

  getErrorMessage(): string {
    return "Maximum file size accepted is 2mb.";
  }
}

export class FileService {
  private file: File;

  constructor(file: File) {
    this.file = file;
  }

  static getFileExtension(fileName: string): string {
    const fileNames: Array<string> = fileName?.split(".");

    if (!fileNames) {
      return "";
    }

    if (fileNames.length === 0) {
      return "";
    }

    return fileNames[fileNames.length - 1];
  }

  private getFormData(): FormData {
    const formData = new FormData();
    formData.append("file", this.file);
    return formData;
  }
}

interface ValidatorResponse {
  isValid: boolean;
  errorMessage: string;
}

const fileTypes = ["jpg", "jpeg", "png"];

async function validateFileSize(fileSize: number): Promise<ValidatorResponse> {
  const validator = new DocumentFileSizeValidator(fileSize);
  const isValid = validator.validateFileSize();

  return {
    isValid,
    errorMessage: isValid ? "" : validator.getErrorMessage(),
  };
}

async function validateFileType(fileType: string): Promise<ValidatorResponse> {
  const validator = new FileTypeValidator(fileType, fileTypes);
  const isValid = validator.validateFileType();

  return {
    isValid,
    errorMessage: isValid ? "" : validator.getErrorMessage(),
  };
}

export const setAllValues = (setValue: any, user: any) => {
  setValue("first_name", user?.first_name);
  setValue("last_name", user?.last_name);
  setValue("phone_number", user?.profile?.phone_number);
  setValue("profile", user?.profile?.profile?.state);
  setValue("state", user?.profile?.last_name);
  setValue("lga", user?.profile?.lga);
  setValue("twitter", user?.profile?.twitter);
  setValue("instagram", user?.profile?.instagram);
  setValue("description", user?.profile?.description);
};

export const setGadgetValues = (setValue: any, gadget: any) => {
  setValue("category", gadget?.category);
  setValue("lga", gadget?.lga);
  setValue("state", gadget?.state);
  setValue("name", gadget?.name);
  setValue("condition", gadget?.condition);
  setValue("description", gadget?.description);
  setValue("price", gadget?.price);
  setValue("contact_info", gadget?.contact_info);
  setValue("photos", gadget?.photos);
}

export const baseUrl = "http://localhost:3002/api/v1";

export const REGION = "us-east-1";
export const bucketName: string = "rentaa-gadgets";

export { validateFileSize, validateFileType };
