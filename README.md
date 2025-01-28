# WhatsNow

## Overview

This project is a simple yet effective web application that allows users to start a WhatsApp chat directly without having to save the recipient's phone number in their contacts. The application validates the entered phone number in real-time and redirects the user to the corresponding WhatsApp chat page.

## Features

- Real-time validation of international phone numbers
- Automatic addition of the "+" sign if missing
- Visual feedback on the validity of the entered number
- Responsive design for various screen sizes
- Direct redirection to WhatsApp chat

## Technologies

- React
- Next.js
- Bun
- TypeScript
- Tailwind CSS
- shadcn/ui components
- libphonenumber-js for phone number validation

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/smarterToby/whatsnow.git
   ```

2. Navigate to the project directory:
   ```bash
   cd whatsnow
   ```

3. Install the dependencies:
   ```bash
   bun install
   ```

4. Start the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Enter an international phone number in the input field. The "+" sign at the beginning is optional.
2. The application validates the number in real-time and provides visual feedback.
3. When the number is valid, click the "Open in WhatsApp" button.
4. You will be redirected to the WhatsApp web page or the WhatsApp app, where you can start chatting directly with the entered number.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
