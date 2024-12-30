#### Mike's Movie App

Vercel Deployment:

## Project: Movie Explorer

This project will create a movie exploration application that allows users to search for movies, view details, and create a watchlist. We'll use the OMDb API (Open Movie Database), which is free and easy to use.

API: OMDb API (Free tier with API key)
The OMDb API provides movie information and is simple to integrate. It offers a free tier with sufficient requests for a side project.

ve## Getting Started

If installing locally:

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and fill in the values
4. To pull environment variables from Vercel (if applicable):
   - Ensure you're logged in to Vercel CLI (`npx vercel login`)
   - Run `npm run pull-env`
5. Run `npm run dev` to start the development server

## Project Outline:

1. Components:

   1. Header: Display the app title and navigation
   2. SearchBar: Allow users to search for movies
   3. MovieList: Display search results or watchlist
   4. MovieCard: Show basic movie information in the list
   5. MovieDetails: Display detailed information about a selected movie
   6. Watchlist: Manage user's saved movies
   7. Pagination: Navigate through search results
   8. LoadingSpinner: Display while fetching data
   9. ErrorMessage: Show error messages when API calls fail

2. Core React Concepts to Cover:

   1. Functional components
   2. Hooks (useState, useEffect, useContext, useCallback, useMemo)
   3. Custom hooks (e.g., useMovieSearch, useWatchlist)
   4. Context API for global state management (e.g., watchlist, theme)
   5. Conditional rendering
   6. Lists and keys (for movie results)
   7. Event handling (for search submissions, adding to watchlist)
   8. Lifting state up
   9. Error boundaries

3. API Integration:

   1. Fetch movie data from OMDb API
   2. Handle API responses and errors
   3. Implement debouncing for search input to limit API calls

4. State Management:

   <!-- 1. Use React Context for global state (watchlist, theme) -->

   2. Local state for component-specific data

5. Styling:

   1. Use CSS modules or styled-components
   2. Implement responsive design for mobile and desktop views

6. Testing:

   1. Jest: Unit tests for utility functions
   2. React Testing Library: Integration tests for component interactions
   3. Playwright: End-to-end tests for user flows (e.g., searching for a movie and adding to watchlist)
   4. Mock Service Worker: Intercept and mock API calls for consistent testing

7. Additional Features:
   1. Implement infinite scrolling for search results
   2. Add movie ratings and reviews
   3. Create movie recommendations based on watchlist
   4. Implement dark mode toggle

Technologies and Libraries:

1. React (with Create React App or Next.js)
2. TypeScript for type safety
3. Axios or fetch for API calls
4. Jest and React Testing Library for unit and integration tests
5. Playwright for end-to-end testing
6. Mock Service Worker for API mocking in tests
7. CSS Modules or styled-components for styling
8. ESLint and Prettier for code formatting and linting

## Break down the UI/UX design and component structure for our Single Page Application:

1. Main App Container (SPA Root)
   a. Header (always visible) -->

   <!-- - Logo -->

   - Navigation Menu (Home/Search, Watchlist)
   - Sign In (use localStorageAPI)
   <!-- b. Theme Toggle (Dark/Light mode) -->

   c. Main Content Area (changes based on route)
   <!-- d. Footer (always visible) -->

2. Home Page / Search (default route: '/')
   a. Hero Section
   <!-- i. Welcome message -->

   ii. Featured movie backdrop

   b. Search Bar
   i. Input field
   ii. Search button

   c. Popular Movies Section
   i. Grid of MovieCards

3. Search Results (route: '/search?query=...')
   a. Search Bar (with current query)
   b. Results Count
   c. MovieList
   i. Grid of MovieCards
   d. Pagination or Infinite Scroll

4. Movie Details (route: '/movie/:id')
   a. Movie Poster
   b. Title
   c. Year, Runtime, Genre
   d. Plot
   e. Director and Cast
   f. Ratings
   g. "Add to Watchlist" button

5. Watchlist (route: '/watchlist')
   a. Watchlist Header
   b. MovieList
   i. Grid of MovieCards with "Remove" option

6. Shared Components
   a. MovieCard
   i. Poster
   ii. Title
   iii. Year
   iv. "View Details" button
   b. LoadingSpinner
   c. ErrorMessage

UI/UX Considerations:

1. Responsive Design:
   a. Use a fluid grid system for movie lists
   b. Stack elements vertically on smaller screens
   c. Adjust font sizes and spacing for readability

2. Animations and Transitions:
   a. Smooth transitions between routes
   b. Subtle hover effects on interactive elements
   c. Loading animations for API calls

3. Color Scheme and Theming:
   a. Use a color palette inspired by cinema (e.g., dark grays, reds, golds)
   b. Implement dark and light modes
   c. Ensure sufficient contrast for accessibility

4. Typography:
   a. Use a clear, readable sans-serif font for body text
   b. Consider a more stylized font for headings and movie titles

5. Search Experience:
   a. Implement auto-suggestions as the user types
   b. Show recent searches
   c. Provide clear feedback for no results

6. Movie Details:
   a. Use a modal for quick view on larger screens
   b. Full-page view on mobile devices

7. Watchlist Management:
   a. Allow drag-and-drop reordering
   b. Provide sorting options (e.g., by date added, title, rating)

8. Error Handling:
   a. Display user-friendly error messages
   b. Provide options to retry failed API calls

9. Performance:
   a. Implement lazy loading for images
   b. Use code splitting to reduce initial load time
