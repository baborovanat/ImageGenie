🖼️ PicGenerator2 🖼️

PicGenerator2 is a mobile application built with React Native that allows users to generate images, apply filters, download them, and send them via email. The app utilizes several libraries to process images, save them locally, and integrate email functionality, offering a seamless experience across both iOS and Android.

Features

    Image Generation: Users can generate images using an external API.
    Apply Filters: Users can apply filters to their generated images before downloading.
    Download Images: Users can download the generated images to their device’s local storage.
    Choose Images from Downloads Folder: Users can select images from their device’s Downloads folder for further processing.
    Email Integration: Users can send the generated image via email directly from the app.
    Platform Support: Works on both iOS and Android.

➡️ App Flow

    Image Generation: The user generates an image by interacting with the app. The image is then processed and available for download.
    Apply Filters: After generating the image, users can apply filters to enhance the image before saving it.
    Download Gallery: After the image is generated, users can download it to their device.
    Send Email: Users can send the image as an attachment through email by specifying the recipient and subject.

➡️ Setup

    Clone the repository:

git clone https://github.com/your-username/PicGenerator2.git
cd PicGenerator2

Install dependencies:

npm install

Link the native modules:

npx react-native link

Run the app:

For iOS:

npx react-native run-ios

For Android:

    npx react-native run-android

⬇️ Dependencies

    react-native-fs: For file system operations (e.g., saving images locally).
    react-native-mail: For sending emails with attachments.
    rn-fetch-blob: For managing network requests and handling file operations.
    @react-native-community/cameraroll: For accessing the device’s photo gallery (including the Downloads folder).

🙌 Contributing

Feel free to fork the repository and submit pull requests for any improvements or new features!

📄 This project is licensed under the MIT License - see the LICENSE file for details.
