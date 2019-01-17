import Reactotron, { overlay } from 'reactotron-react-native'

Reactotron
    .configure()
    .useReactNative()
    .use(overlay())
    .connect()


export default Reactotron
