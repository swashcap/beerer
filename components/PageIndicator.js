import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Touchable, View } from 'react-primitives'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerInner: {
    backgroundColor: 'rgba(255, 255, 255, .45)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5
  },
  indicator: {
    borderColor: 'rgba(0, 0, 0, .55)',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 8,
    width: 8
  },
  indicatorActive: {
    backgroundColor: 'rgba(0, 0, 0, .55)'
  },
  indicatorWrapper: {
    padding: 5
  }
})

const PageIndicator = ({
  count,
  current,
  onPress,
  style,
  ...props
}) => (
  <View
    {...props}
    style={[style, styles.container]}
  >
    <View style={styles.containerInner}>
      {Array.from(new Array(count)).map((_, index) => {
        const style = index === current
          ? [styles.indicator, styles.indicatorActive]
          : styles.indicator

        return (
          <Touchable key={index} onPress={() => onPress(index)}>
            <View style={styles.indicatorWrapper}>
              <View style={style} />
            </View>
          </Touchable>
        )
      })}
    </View>
  </View>
)

PageIndicator.propTypes = {
  count: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
}

export default PageIndicator
