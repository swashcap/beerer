import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-primitives'

import Body from './text/Body'
import Button from './Button'
import Caption from './text/Caption'
import Carousel from './Carousel'
import MetaList from './MetaList'
import MetaListItem from './MetaListItem'
import Title from './text/Title'
import colors from '../styles/colors.json'

const styles = StyleSheet.create({
  button: {
    flexShrink: 1
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  carousel: {
    marginBottom: 20
  },
  location: {
    color: colors.textSecondary,
    marginBottom: 20
  },
  metaList: {
    marginBottom: 25
  },
  textWrapper: {
    paddingBottom: 40,
    paddingHorizontal: 20
  },
  title: {
    marginBottom: 10
  }
})

const Details = ({
  abv,
  beerStyle,
  brewery,
  description,
  ibu,
  images,
  location,
  onAdd,
  title,
  ...props
}) => (
  <View {...props}>
    <Carousel
      images={images}
      style={styles.carousel}
    />
    <View style={styles.textWrapper}>
      <Title style={styles.title}>{title}</Title>
      <Caption>{brewery}</Caption>
      <Caption style={styles.location}>{location}</Caption>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={onAdd}
          style={styles.button}
        >
          Add to List
        </Button>
      </View>
      <MetaList style={styles.metaList}>
        <MetaListItem property='ABV' value={abv} />
        <MetaListItem property='IBU' value={ibu} />
        <MetaListItem property='Style' value={beerStyle} />
      </MetaList>
      <Body>{description}</Body>
    </View>
  </View>
)

Details.defaultProps = {
  abv: '?',
  description: '',
  ibu: '?'
}

Details.propTypes = {
  abv: PropTypes.string,
  beerStyle: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  description: PropTypes.string,
  ibu: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Details
