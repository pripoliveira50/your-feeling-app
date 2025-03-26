# 🎭 Your Feeling App

<p align="center">A simple and expressive mood selection app built with React Native.</p>

---

## 📖 About the Project

**Your Feeling App** is a mobile application developed with React Native that allows users to select their mood using emoticons. It features a clean UI with navigation between screens based on user interaction, including a modal for success feedback.

---

## 🚀 Technologies Used

- **React Native 0.67.3**
- **React 17.0.2**
- **React Navigation (Native Stack)**
- **Axios**
- **React Native Linear Gradient**
- **React Native Splash Screen**
- **React Native Gesture Handler**
- **React Native Reanimated**
- **React Native Safe Area Context**
- **React Native Ratings**
- **TypeScript**

---

## 🧠 Architecture & Technical Decisions

- The project uses **React Navigation** (Native Stack) for lightweight and performant screen transitions.
- **Global state** is managed with hooks and component props due to the app's small scope.
- Styling is handled using **StyleSheet** and **Linear Gradient** for visually appealing transitions and screens.
- A **modular folder structure** ensures separation of concerns between components, screens, services, and global styles.
- All API interactions are centralized in a single Axios instance under `services/api.ts`.
- UI feedback is delivered via a custom **success modal**, enhancing UX after key actions.
- **Splash screen and icon configuration** are manually implemented in Android and iOS native folders.
- The project uses **TypeScript** for type safety and better developer experience.

---

## 🧠 Features

- Splash screen setup for both platforms
- Custom app icon
- Welcome screen with mood selection
- Modal for success confirmation
- Simple two-screen flow with navigation

---

## 📦 Requirements

- Node.js and Yarn installed
- Android Studio and/or Xcode configured for React Native

---

## 🧰 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-feeling-app.git
cd your-feeling-app
```

### 2️⃣ Install dependencies
```bash
yarn
```

### 3️⃣ Install iOS dependencies (macOS only)
```bash
cd ios && pod install && cd ..
```

### 4️⃣ Run the app
```bash
yarn android   # for Android
yarn ios       # for iOS (macOS only)
```

---

## 📂 Folder Structure

```
your-feeling-app/
├── __tests__/              # Unit tests
├── .github/assets/         # App preview for README
├── android/                # Android native project
├── ios/                    # iOS native project
├── src/                    # Application source code
│   ├── @types/             # Type declarations
│   ├── components/         # Reusable UI components
│   ├── global/             # Theme colors and metrics
│   ├── routes/             # App navigation
│   ├── screens/            # Screens (Home, Welcome, Rate Feelings)
│   ├── services/           # API layer (Axios)
│   └── App.tsx             # App entry point
├── index.js
├── tsconfig.json
├── babel.config.js
└── README.md
```

---

## 🧪 Testing

To run tests:
```bash
yarn test
```

---

## 🖼 Interface Preview

<p align="center">
  <img src=".github/assets/app.gif" width="320" alt="App preview"/>
</p>

---

## 📄 License

This project is licensed under the MIT License.

---

🚀 Made with ❤️ by Priscila Oliveira

