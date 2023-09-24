# OnCare Chat

## App Architecture
- I'm adapting here a simple layered architecture consisting of 3 layers: UI, state & hooks, and data layer.
  - UI is the screens and components
  - State is implemented using Mobx MST. Inside this layer, there are a bunch of hooks to subscribe for changes on the Data Layer and call relevant actions from state models.
  - Data layer is implemented using Firebase. It depends on Firebase Auth and Firebase Realtime Database APIs.

<img width="764" alt="Screenshot 2023-09-24 at 11 04 22 PM" src="https://github.com/hossamnasser938/OnCare-Chat/assets/27894818/cd9d669c-2665-41c1-b577-7f63a6ae8a46">


## UI Navigation Hierarchy
- The app navigation hierarchy starts with an `App navigator` that switches between `Auth Navigator` and `Main Navigator` based on user authentication state which is derived from `State` layer.
- The `Auth Navigator` is a simple stack navigator with `Landing`, `Signin` and `Signup` screens.
- The `Main Navigator` is a simple bottom tabs navigator with 2 nested navigators for tabs.
- The `ChatRooms Navigator` is a simple stack navigator with `ChatRoomsList`, `ChatRoom`, and `CreateChatRoom` screens.
- The `Settings` navigator is a simple stack navigator with only one screen `Settings`.

<img width="845" alt="Screenshot 2023-09-24 at 11 05 13 PM" src="https://github.com/hossamnasser938/OnCare-Chat/assets/27894818/83458c86-6fa6-49e1-99e6-898e53f5c743">


## State
- The state layer consists of hooks and MST models.
- The hooks are only for subscription purpose and to leverage the `React` hooks unsubscribtion power.
- The MST models starte with `RootStore` that wraps everything.
- The `AuthStore` is all about maintaining user auth state.
- The `UsersStore` is about maintaining the users we fetch from data layer to be mapped as references into other models.
- The `ChatRoomsStore` is for maintaining the list of chat rooms.
- The `ChatRoom` is for maintaining the list of participants inside the room and the messages there.
- The `Participant`, `Message`, and `Reader` is for abstracting operations and computed properties of each.

<img width="675" alt="Screenshot 2023-09-24 at 11 06 15 PM" src="https://github.com/hossamnasser938/OnCare-Chat/assets/27894818/571431d8-76b5-460d-9d3b-591f7fa2e177">


## Data Layer
- The Data Layer is a simple API for abstraction purpose that hides data operations inside. IT leverages Firebase Auth and Firebase Realtim Database capabilities to help building realtime features.

<img width="673" alt="Screenshot 2023-09-24 at 11 06 50 PM" src="https://github.com/hossamnasser938/OnCare-Chat/assets/27894818/f3a55416-3324-4a09-a6f8-4c32450f5a93">



