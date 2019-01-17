import Reactotron from 'reactotron-react-native'

Reactotron
  .configure({
    name: "React Native Demo"
  })
  .useReactNative({
    asyncStorage: false, 
    networking: { 
      ignoreUrls: false
    },
    editor: false, 
    errors: { veto: (stackFrame) => false }, 
    overlay: false, 
  })
  .connect();