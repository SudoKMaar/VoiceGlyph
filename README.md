## Voice Glyph

Deployed at: https://voiceglyph.netlify.com/

Voice Glyph is a revolutionary React web app that converts speech to text in real time. It provides a seamless and intuitive experience for users to transcribe their spoken words into written text instantly. With Voice Glyph, you can effortlessly capture your ideas, take notes, or dictate content without the need for manual typing.

## Features

- Real-time speech-to-text conversion
- Interactive and user-friendly interface
- Effortlessly transcribe spoken words into written text
- Copy transcribed text to the clipboard
- Export transcribed text as a text file
- Clear and reset the transcribed text

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/SudoKMaar/VoiceGlyph.git
   ```

2. Navigate to the project directory:

   ```shell
   cd VoiceGlyph
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the development server:

   ```shell
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000` to access the Voice Glyph app.

## How It Works

1. Click the "Start Listening" button to begin speech recognition.
2. Speak into your device's microphone, and your speech will be converted to text in real time.
3. The transcribed text will be displayed in the main content area of the app.
4. To copy the transcribed text to the clipboard, click the "Copy to clipboard" button.
5. To export the transcribed text as a text file, click the "Export" button. The file will be downloaded as "transcript.txt".
6. To clear the transcribed text and start afresh, click the "Clear" button.
7. When finished, click the "Stop Listening" button to end speech recognition.

## Folder Structure

The project structure is organized as follows:

```
voice-glyph/
  ├── src/
  │   ├── vg_logo.jpg
  │   ├── logo.svg
  │   ├── index.js
  │   ├── index.css
  │   ├── bg.svg
  │   ├── App.js
  │   └── App.css
  ├── public/
  │   ├── robots.txt
  │   ├── manifest.json
  │   ├── logo521.jpg
  │   ├── logo192.jpg
  │   ├── index.html
  │   └── favicon.ico
  ├── package.json
  ├── package-lock.json
  └── README.md
```

- `src/`: Contains the source code of the Voice Glyph app.
- `src/components/`: Contains individual React components used in the app.
- `src/logo.jpg`: Logo image file used in the app.
- `public/`: Contains the public assets of the app, such as HTML and favicon.
- `package.json`: Defines the project dependencies and scripts.
- `README.md`: Provides information about the Voice Glyph app and how to use it.

## Contributing

Contributions are welcome! If you find any issues or would like to enhance the Voice Glyph app, feel free to open a pull request.

## License

This Voice Glyph app is open source and available under the [MIT License](LICENSE).
```
