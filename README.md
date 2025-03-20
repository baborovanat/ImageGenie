☁️ PicGenerator2 ☁️

PicGenerator2 is a mobile application built with React Native that allows users to generate images, download them, and send them via email. The app utilizes several libraries to process images, save them locally, and integrate email functionality.
Features

    Image Generation: Users can generate images using an external API.
    Download Images: Users can download the generated images to their device’s local storage.
    Email Integration: Users can send the generated image via email directly from the app.
    Platform Support: Works on both iOS and Android.

➡️ App Flow

    Image Generation: The user generates an image by interacting with the app. The image is then processed and available for download.
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

🔥 Key Functionalities

    Image Download: The app supports downloading the generated images in PNG format using the RNFetchBlob library.
    Email Functionality: The app uses react-native-mail to send images as email attachments.

➡️ Dependencies

    react-native-fs: For file system operations (e.g., saving images locally).
    react-native-mail: For sending emails with attachments.
    rn-fetch-blob: For managing network requests and handling file operations.

⬇️ Required Setup

    Android Configuration: Add dependencies in the android/app/build.gradle file:

implementation project(':react-native-fs')
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.0.0'

Linking React Native FS: Ensure the module is linked in android/settings.gradle:

    include ':react-native-fs'
    project(':react-native-fs').projectDir = new File(settingsDir, '../node_modules/react-native-fs/android')

🙌 Contributing

Feel free to fork the repository and submit pull requests for any improvements or new features!

📄This project is licensed under the MIT License - see the LICENSE file for details.
