class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "s2nxs4k5");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dcqy2onhz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
// image upload만 담당하는 class
// 사용자에게 파일받아서 업로드하고 서버에 이미지 url전달해줌
