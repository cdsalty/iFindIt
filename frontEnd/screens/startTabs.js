import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = ()=>{
    Promise.all(
        [
            Icon.getImageSource("md-search", 50),
            Icon.getImageSource("ios-contact", 50)
        ]
    ).then(images => {
        Navigation.startTabBasedApp({
            tabs:[
                {
                    screen: 'iFindIt.SearchScreen',
                    title: "Search for movies",
                    label: "Search for movies",
                    icon: images[0]
                },
                {
                    screen: 'iFindIt.AccountScreen',
                    title: 'Account info',
                    label: 'Account info',
                    icon: images[1]
                }
            ]
        })
    })
    
}

export default startTabs;