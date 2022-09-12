import React, { SyntheticEvent, useState } from "react";
import { v1 as uuid } from "uuid";
import {
  HookInput,
  InputField,
  SelectInput,
} from "../../components/BasicInputField";
import Button from "../../components/Button";
import addPhoto from "../../images/addPhoto.svg";
import uploadPhoto from "../../images/photoUpload.svg";
import NaijaStates from "naija-state-local-government";
import { useForm } from "react-hook-form";
import {
  CategoryValue,
  gadgetConditions,
  IProductInputs,
} from "../../interfaces";
import { useGetCategoriesQuery } from "../../services/Queries/queries";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  FileService,
  getLga,
  getStates,
  validateFileSize,
  validateFileType,
} from "../../utils/helper";
import { postGadget } from "../../services/Mutations/postGadget";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store/store";
import Loader from "../../components/Loader";

interface ImageProp {
  id: string;
  image: string;
}

export default function PostProduct() {
  const [state, setState] = useState("");
  const [docs, setDocs] = useState<any>([]);
  const [photos, setPhotos] = useState<any[]>([]);
  const [fileError, setFileError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = uuid();

  const { data, error, loading } = useSelector(
    (state: RootState) => state.postGadgetReducer
  );

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IProductInputs>({
    mode: "onTouched",
    defaultValues: {
      contact_info: JSON.parse(localStorage.getItem("userData") || "{}")
        .phone_number,
    },
  });

  const { data: productCategories } = useGetCategoriesQuery("");
  const categories: [] = productCategories?.items?.map((item: any) => {
    return {
      value: item.id,
      text: item.name,
    };
  });

  let allCategories;

  if (categories) {
    allCategories = [{ value: "", text: "-Select-" }, ...categories];
  }

  /**
   * Package returns
   */
  const lga = NaijaStates.lgas(
    getValues("state") ? getValues("state") : "lagos"
  );

  const handleFiles = async (e: any) => {
    const file = e.target.files[0];
    const validFileSize = await validateFileSize(file?.size);

    const validFileType = await validateFileType(
      FileService.getFileExtension(file?.name)
    );

    if (!validFileSize.isValid) {
      setFileError(validFileSize.errorMessage);
      return;
    }

    if (!validFileType.isValid) {
      setFileError(validFileType.errorMessage);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhotos((prev) => [{ image: reader.result, id }, ...prev]);
      }
    };
    reader.readAsDataURL(file);
    setDocs((prev: any) => [{ file, id }, ...prev]);
    setFileError("");
  };

  /**
   * deletes image from state(interface)
   * @param id
   *
   */
  const deleteFile = (id: string) => {
    const newPhotos = photos.filter((photo) => photo.id !== id);
    const newDocs = docs.filter((doc: any) => doc.id !== id);
    setPhotos([...newPhotos]);
    setDocs([...newDocs]);
  };

  const handleClick = () => {
    const newState = getValues("state");
    setState(newState);
  };

  /**
   *
   * @param data
   * @returns
   */
  const postProductHandler = (data: IProductInputs) => {
    if (photos.length === 0) {
      return setFileError("Please upload Gadgets to continue");
    }
    const {
      category,
      name,
      price,
      state,
      lga,
      condition,
      contact_info,
      description,
    } = data;
    console.log(">>>>data", data);
    let images = docs.map((item: any) => item.file);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("categoryId", category);
    formData.append("price", price);
    formData.append("state", state);
    formData.append("lga", lga);
    formData.append("condition", condition);
    formData.append("contact_info", contact_info);
    formData.append("description", description);
    for (let i = 0; i < images.length; i++) {
      formData.append("photos", images[i]);
    }
    const newData = {
      formData,
      navigate,
    };
    dispatch(postGadget(newData));
  };

  return (
    <div className="mx-auto font-dm-sans max-w-7xl my-20 px-4">
      <div className="mt-10">
        <h1 className="text-lg md:text-3xl pb-2 text-center">Post Gadget</h1>
        <p className="text-xs md:text-base text-center font-extralight">
          Fill the forms with Gadget Information, Details and Product specs. Be
          sure to remain honest and transparent
        </p>
        {error?.statusCode === 500 && (
          <p className=" text-red-700 text-sm text-center pt-4">
            Sorry, please something went wrong, check your network
          </p>
        )}

        <form
          className="w-full flex items-center justify-center"
          onSubmit={handleSubmit(postProductHandler)}
        >
          <div className="flex flex-col items-start ">
            <div className=" w-full px-3">
              <SelectInput
                register={register}
                label="Product Category"
                className="lg:w-700 pt-12 cursor-pointer bg-transparent"
                name="category"
                selectArray={allCategories}
                required
                type="text"
                errors={errors?.category}
                message="category is required"
              />
              <SelectInput
                register={register}
                selectArray={[{ value: "", text: "-Select-" }, ...getStates()]}
                label="Current State of Residence"
                className="lg:w-700 pt-12 cursor-pointer bg-transparent"
                name="state"
                type="text"
                setState={handleClick}
                required
                errors={errors?.state}
                message="state is required"
              />
              <SelectInput
                register={register}
                selectArray={[{ value: "", text: "-Select-" }, ...getLga(lga)]}
                label="LGA"
                className="lg:w-700 pt-12 bg-transparent"
                name="lga"
                type="text"
                required
                errors={errors?.lga}
                message="lga is required"
              />
              <InputField
                register={register}
                label="Gadget Name"
                className="lg:w-700 pt-12"
                name="name"
                required
                errors={errors?.name}
                message="name is required"
              />
              <SelectInput
                register={register}
                selectArray={gadgetConditions}
                label="Gadget Condition"
                className="lg:w-700 pt-12 bg-transparent"
                name="condition"
                required
                errors={errors?.condition}
                message="gadget condition is required"
              />
              <InputField
                register={register}
                label="Description"
                className="lg:w-700 pt-12  "
                textAreaClass="md:h-96  h-36 rounded-lg"
                name="description"
                maxLength={400}
                minLength={30}
                required
                textArea
                errors={errors?.description}
                message="description must be more than 30 chars and lesser than 400 chars"
              />
              <InputField
                register={register}
                label="Price/Week"
                className="lg:w-700 pt-12"
                name="price"
                required
                errors={errors?.price}
                message="price is required"
              />
              <InputField
                register={register}
                label="Contact Information"
                className="lg:w-700 pt-12"
                name="contact_info"
                type="number"
                required
                errors={errors?.contact_info}
                message="contact info is required"
              />

              <p className="text-sm pt-7  md:text-base">
                {fileError && (
                  <p className="text-sm pt-7 text-red-500">{fileError}</p>
                )}
                Add Gadget Photo <span className=" ml-1 text-red-600">*</span>
              </p>
              <p className="text-xs text-gray-300 md:text-sm pt-1">
                Each picture must not be larger than 6MB. We recommend you
                upload between 3-5 pictures
              </p>

              <div className="pt-4 flex">
                <label>
                  <img
                    src={addPhoto}
                    alt=""
                    className="w-20 md:w-28 pr-4 md:pr-6 cursor-pointer"
                  />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFiles}
                    name="photos"
                  />
                </label>
                {photos?.map((photo: ImageProp) => {
                  return (
                    <div className="border mx-2 relative">
                      <MdDeleteForever
                        onClick={() => deleteFile(photo.id)}
                        className="absolute right-1 cursor-pointer w-6 h-6"
                      />
                      <img
                        src={photo.image}
                        alt=""
                        className="w-16 h-16 md:h-20 md:w-20 mx-2"
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-gray-300 md:text-sm pt-5">
                Supported formats; .jpeg, .png,
              </p>

              <Button
                child={loading ? <Loader /> : "Submit"}
                type="submit"
                className="w-full bg-secondary mt-10 py-3 md:py-8 font-dm-sans md:text-lg text-white rounded"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
