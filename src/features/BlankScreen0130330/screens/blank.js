import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_5}>
        <View style={styles.View_6} />
        <View style={styles.View_7}>
          <View style={styles.View_16}>
            <View style={styles.View_17}>
              <Icon
                iconFont="Eva Design Icons"
                name="home"
                height={20}
                width={20}
                style={styles.Icon_58}
              />
            </View>
            <View style={styles.View_18}>
              <Icon
                iconFont="Eva Design Icons"
                name="activity"
                height={20}
                width={20}
                style={styles.Icon_65}
              />
            </View>
            <View style={styles.View_26}>
              <Icon
                iconFont="Eva Design Icons"
                name="square"
                height={20}
                width={20}
                style={styles.Icon_69}
              />
            </View>
            <View style={styles.View_42}>
              <Icon
                iconFont="Eva Design Icons"
                name="person"
                height={20}
                width={20}
                style={styles.Icon_74}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
