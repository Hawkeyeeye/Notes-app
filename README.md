# Notes App

A simple React note-taking app with no backend.

## Setup

1. Clone the repo
2. Run `npm install`
3. Run `npm start`

## Storage Strategy

- Uses `localStorage` for persistence (Why? Simple, persistent, no backend needed).
- Key: 'notes'.

## Component Design

- **AddNote**: Handles form and submission.
- **NotesList**: Displays notes from storage.
- **NavBar**: Simple navigation between add/view.

## State Management

- `useState` and `useEffect` for local state and storage sync.

## Styling

- Plain CSS-in-JS for rapid, simple styling (Why? Fast for small projects).

## Navigation

- Minimal tabs/buttons for clarity (Why? Simple UX).

## Error Handling

- Shows error if storage fails (e.g., quota).
- Shows spinner while saving.

## Time Estimate

- 2 hours-prioritizing clarity of UI, correctness of client-side data flow, and concise “why” documentation.

## Submission

- GitHub Repo: <(https://github.com/Hawkeyeeye/Notes-app)>
- Live Site: <vercel-or-netlify-urlhttps://notes-app-blush-rho.vercel.app/>
