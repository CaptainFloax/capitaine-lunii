import { Alert, Badge, Button, Center, Container, Text } from "@mantine/core";
import { getLuniiHandle } from "../utils";
import { getDeviceInfo } from "../utils/lunii/deviceInfo";
import { state } from "../store";
import { IconFolderOpen } from "@tabler/icons-react";

export const UnconnectedApp = () => {
  return (
    <Container h="80vh">
      <Center h="100%" style={{ flexDirection: "column" }}>
        <Badge mb={20}>Capitaine Lunii</Badge>
        <Text mb={20}>
          Pour utiliser Capitaine Lunii il faut donner les permissions au
          navigateur d'accéder à votre appareil.
        </Text>

        <Button
          mb="xl"
          leftIcon={<IconFolderOpen size="1rem" />}
          onClick={async () => {
            const handle = await getLuniiHandle();
            if (!handle) return;

            const device = await getDeviceInfo(handle);

            await state.device.set(device);
            await state.luniiHandle.set(handle);
          }}
        >
          Ouvrir ma Lunii
        </Button>
		<Alert my="lg" radius="md" p="xl">
          <Text mb="md">🔨 Instructions</Text>
          <Text mb="sm">Après avoir cliquer sur le bouton, choisir le dossier de votre Lunii </Text>
        </Alert>
      </Center>
    </Container>
  );
};
