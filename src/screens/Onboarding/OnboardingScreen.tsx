import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Props } from './types';
import { useStyle } from './styles';
import { Header } from './Header';

import { PageContainer, Button, Typography, Space } from '../../components';
import { EN_STRINGS } from '../../utils';
import { useTheme } from '../../providers';
import { ROUTES } from '../../navigation';

export const OnboardingScreen = ({ testID }: Props) => {
  const styles = useStyle();
  const { navigate } = useNavigation();
  const { theme } = useTheme();

  const handleOnPressContinue = () => {
    navigate(ROUTES.SIGN_UP_STACK, {
      screen: ROUTES.SIGN_UP_STEP_ONE_SCREEN,
      params: {},
    });
  };

  return (
    <View style={styles.backgroundWrapper} testID={testID}>
      <SafeAreaView style={styles.flex}>
        <Header />
        <PageContainer>
          <View style={styles.container}>
            <View style={styles.body}>
              <Typography variant="rubik-body-small" textAlign="center">
                {EN_STRINGS.onboardingScreen.welcome}
              </Typography>
              <Space height={theme.spacings.l} />
              <Typography
                variant="roboto-h1"
                textAlign="center"
                color={theme.colors.background}
              >
                {EN_STRINGS.onboardingScreen.slogan}
              </Typography>
            </View>
            <View style={styles.bottom}>
              <Button
                testID={`${testID}_button`}
                variant="solid"
                colorScheme="secondary"
                fullWidth
                onPress={handleOnPressContinue}
              >
                {EN_STRINGS.common.continue}
              </Button>
            </View>
          </View>
        </PageContainer>
      </SafeAreaView>
    </View>
  );
};
