import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Formik } from 'formik';

import { Props } from './types';

import { useStyle } from '../styles';
import { Button, PageContainer, TextInput } from '../../../components';
import { SignUpLayout } from '../SignUpLayout';
import { createUserValidationStepTwoSchema } from '../validations';
import { useUserProvider } from '../../../providers/UserProvider';
import { EN_STRINGS } from '../../../utils';
import { FormGuardian } from '../FormGuardian';
import { useAsyncStorageContext } from '../../../providers/AsyncStorageProvider';

export const SignUpStepTwoScreen = ({ route }: Props) => {
  const styles = useStyle();
  const prevForm = route?.params?.prevFormValues;

  const { data: asyncStorageData } = useAsyncStorageContext();

  const formStoredData = JSON.parse(asyncStorageData.storedForm!) as any;

  const { currentUser, createUser, updateUser } = useUserProvider();

  const createUserData = { ...prevForm, phoneNumber: currentUser?.phone || '' };

  const handleSubmitForm = (values: typeof createUserData) => {
    if (currentUser?.first_name) {
      updateUser({
        first_name: values?.firstName || formStoredData?.firstName,
        last_name: values?.lastName || formStoredData?.lastName,
        email: values?.email || formStoredData?.email,
        phone: values?.phoneNumber || formStoredData?.phoneNumber,
        id: currentUser?.id,
      });

      return;
    }
    createUser({
      first_name: values?.firstName,
      last_name: values?.lastName,
      email: values?.email,
      phone: values.phoneNumber,
    });
  };

  return (
    <View style={styles.backgroundWrapper}>
      <SafeAreaView style={styles.flex}>
        <PageContainer>
          <View style={styles.container}>
            <SignUpLayout
              title={EN_STRINGS.signUpScreen.stepTwo.title}
              showGoBack
            >
              <Formik
                initialValues={createUserData}
                enableReinitialize
                validationSchema={createUserValidationStepTwoSchema}
                onSubmit={(values) => {
                  console.log(values);
                  handleSubmitForm(values);
                }}
              >
                {({ values, handleSubmit, handleChange, errors }) => {
                  return (
                    <View style={styles.formikWrapper}>
                      <View>
                        <TextInput
                          value={values.phoneNumber}
                          label={
                            EN_STRINGS.signUpScreen.stepTwo.formLabels.phone
                          }
                          onChangeText={handleChange('phoneNumber')}
                          errorMessage={errors.phoneNumber}
                        />
                      </View>
                      <Button
                        variant="solid"
                        colorScheme="primary"
                        fullWidth
                        onPress={() => handleSubmit()}
                      >
                        {EN_STRINGS.common.save}
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
