# CasaLink

CasaLink is a house marketplace platform that enables users to list their properties for rent or sale. It offers features like special offer listings, geolocation-based map views, and user authentication.

The project uses **Firebase v9** for backend functionalities, built in authentication and Google OAuth, database management, and image storage. The frontend is developed using **React**, while **Leaflet.js** is used for geolocation.

## Features

### User Registration & Authentication
- Sign up and log in with email/password
- Google OAuth for quick sign-in

### Property Listings
- List homes for **rent** or **sale**
- Mark listings as **special offers**

### Map Integration
- View property locations on an interactive map using **Leaflet.js**

### Image Uploads
- Upload and store property images with **Firebase Storage**

### Real-time Database
- Manage and retrieve property listings with **Firebase Realtime Database**

## Tech Stack

- **Frontend**: React
- **Backend**: Firebase v9
  - **Authentication**: Firebase Authentication (including Google OAuth)
  - **Database**: Firebase Realtime Database
  - **Storage**: Firebase Storage
- **Geolocation**: Leaflet.js

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/CasaLink.git

2.	Navigate to the project directory: 
    cd CasaLink

3.	Install dependencies:
    npm install

4.	Set up Firebase:
	•	Create a project in the Firebase console.
	•	Enable Authentication, Realtime Database, and Storage.
	•	Add your Firebase credentials to an .env file:

    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id

5.	Start the development server:
    npm start

    Usage

	1.	Register or log in using email/password or Google OAuth.
	2.	List a property for rent or sale and upload images.
	3.	View properties on a map using Leaflet’s geolocation.
	4.	Mark a listing as a special offer to highlight it.

## Contributing

Feel free to fork this project and submit a pull request.

## License

This project is licensed under the MIT License.