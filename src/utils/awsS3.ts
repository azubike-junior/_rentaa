const bucketName: string = "rentaa-gadgets";
const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

const REGION = "us-east-1"; 

export class S3 {
  public static viewAlbum = async function (keys: any) {
    // const albumPhotosKey = encodeURIComponent(albumName) + "/";
    const href = "https://s3." + REGION + ".amazonaws.com/";
    const bucketUrl = href + bucketName + "/";
    return keys.map((key: any) => {
      const photoUrls = bucketUrl + encodeURIComponent(key);
      return photoUrls;
    });
  };
}
