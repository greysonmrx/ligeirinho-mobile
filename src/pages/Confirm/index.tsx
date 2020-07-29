import React, { useState, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ToastAndroid, Alert } from 'react-native';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import Background from '../../components/Background';

import {
  Container,
  CameraContainer,
  Preview,
  StyledCamera,
  SnapButton,
  SendButton,
  SendButtonText,
  CloseButton,
} from './styles';

interface IParams {
  id: string;
}

const Confirm: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const camera = useRef<any>(null);

  const { id } = route.params as IParams;

  const [picture, setPicture] = useState<string>('');
  const [confirm, setConfirm] = useState(false);

  async function takePicture() {
    if (camera) {
      const data = await camera.current?.takePictureAsync({
        quality: 0.5,
        base64: true,
      });

      setPicture(data.uri);
      setConfirm(false);
    }
  }

  function handleCancel() {
    setPicture('');
  }

  async function handleSubmit() {
    if (!confirm) {
      setConfirm(true);
      return;
    }

    setConfirm(false);

    try {
      const data = new FormData();

      data.append('file', {
        type: 'image/jpeg',
        uri: picture,
        name: 'mano',
      });

      const response = await api.post('/files', data);

      const signature_id = response.data.id;

      await api.post(`/deliveryman/${user.id}/delivery/${id}/finish`, {
        signature_id,
      });

      ToastAndroid.show('Entrega finalizada', 3000);
      navigation.goBack();
    } catch (err) {
      Alert.alert(
        'Erro ao confirmar entrega',
        'Não foi possível confirmar a entrega',
      );
    }
  }

  return (
    <Background>
      <Container>
        <CameraContainer style={{ elevation: 3 }}>
          {picture ? (
            <>
              <Preview source={{ uri: picture }} />
              <CloseButton onPress={handleCancel}>
                <Icon color="#FFFFFF" size={26} name="close" />
              </CloseButton>
            </>
          ) : (
              <StyledCamera
                ref={camera}
                captureAudio={false}
                type={StyledCamera.Constants.Type.back}
                flashMode={StyledCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
              >
                <SnapButton onPress={takePicture}>
                  <Icon color="#FFFFFF" size={26} name="camera-alt" />
                </SnapButton>
              </StyledCamera>
            )}
        </CameraContainer>
        <SendButton onPress={handleSubmit}>
          <SendButtonText>
            {confirm ? 'Tem certeza que deseja enviar?' : 'Enviar'}
          </SendButtonText>
        </SendButton>
      </Container>
    </Background>
  );
};

export default Confirm;
