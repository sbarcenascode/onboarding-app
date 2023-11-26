import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import { useStyle } from '../styles';
import { Button, PageContainer, Space, TextInput } from '../../../components';
import { SignUpLayout } from '../SignUpLayout';
import { useTheme } from '../../../providers';
import { ROUTES } from '../../../navigation';
import { createUserValidationStepOneSchema } from '../validations';
import { useUserProvider } from '../../../providers/UserProvider';
import { EN_STRINGS } from '../../../utils';
import { useAsyncStorageContext } from '../../../providers/AsyncStorageProvider';
import { FormGuardian } from '../FormGuardian';

export const SignUpStepOneScreen = () => {
  const styles = useStyle();
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  const { data: asyncStorageData } = useAsyncStorageContext();
  const { currentUser } = useUserProvider();

  const formStoredData = JSON.parse(asyncStorageData.storedForm!) as any;

  const createUserData = {
    firstName: currentUser?.first_name || formStoredData?.firstName || '',
    lastName: currentUser?.last_name || formStoredData?.lastName || '',
    email: currentUser?.email || formStoredData?.email || '',
  };

  const handleOnSubmit = (values: typeof createUserData) => {
    navigate(ROUTES.SIGN_UP_STACK, {
      screen: ROUTES.SIGN_UP_STEP_TWO_SCREEN,
      params: { prevFormValues: values },
    });
  };

  return (
    <View style={styles.backgroundWrapper}>
      <SafeAreaView style={styles.flex}>
        <PageContainer>
          <View style={styles.container}>
            <SignUpLayout title={currentUser?.first_name || 'Create Your User'}>
              <Formik
                validationSchema={createUserValidationStepOneSchema}
                initialValues={createUserData}
                validateOnChange={false}
                onSubmit={(values) => {
                  handleOnSubmit(values);
                }}
              >
                {({ values, handleSubmit, handleChange, errors }) => {
                  return (
                    <View style={styles.formikWrapper}>
                      <View style={styles.formContainer}>
                        <TextInput
                          value={values.firstName}
                          label={
                            EN_STRINGS.signUpScreen.stepOne.formLabels.firstName
                          }
                          onChangeText={handleChange('firstName')}
                          errorMessage={errors.firstName}
                        />
                        <Space height={theme.spacings.xl} />
                        <TextInput
                          value={values.lastName}
                          label={
                            EN_STRINGS.signUpScreen.stepOne.formLabels.lastName
                          }
                          onChangeText={handleChange('lastName')}
                          errorMessage={errors.lastName}
                        />
                        <Space height={theme.spacings.xl} />
                        <TextInput
                          value={values.email}
                          label={
                            EN_STRINGS.signUpScreen.stepOne.formLabels.email
                          }
                          onChangeText={handleChange('email')}
                          errorMessage={errors.email}
                        />
                      </View>
                      <Button
                        variant="solid"
                        colorScheme="primary"
                        fullWidth
                        onPress={() => handleSubmit()}
                      >
                        {EN_STRINGS.common.continue}
                      </Button>
                      <FormGuardian values={values} />
                    </View>
                  );
                }}
              </Formik>
            </SignUpLayout>
          </View>
        </PageContainer>
      </SafeAreaView>
    </View>
  );
};
