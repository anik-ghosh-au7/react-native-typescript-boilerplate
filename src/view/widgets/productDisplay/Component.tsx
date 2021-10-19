import * as React from 'react';
import { View } from 'react-native';

import { CImage } from '../../elements/atoms';
import { CText } from '../../elements/inputs';
import { GLOBAL } from '../../styles/global';
import { TYPOGRAPHY } from '../../styles/typography';

interface Props {
  title: string;
  price: number;
  imageUrl: string;
  subtitle?: string;
}

const ProductDisplay: React.FC<Props> = ({ title, price, imageUrl }: Props) => {

  return (
    <View style={TYPOGRAPHY.ELEMENTS.ProductDisplay}>
      <CImage
        style={{ width: '100%', height: 288 }}
        uri={imageUrl || 'https://i.pinimg.com/originals/eb/c5/d0/ebc5d040c8ff5fff0e623d44b337e0fa.jpg'}
      />
      <CText style={GLOBAL.FONTS.subTitle}>{title || 'BeoPlay Speaker'}</CText>
      <CText style={GLOBAL.FONTS.body}>{'Bang and Olufsen'}</CText>
      <CText style={[GLOBAL.FONTS.price]}>{price ? `$${price}` : '$755'}</CText>
    </View>
  );
};

export default ProductDisplay;
