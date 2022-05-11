import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

const ToggleThemeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Button pos="absolute" top="0" right="0" m="1rem" onClick={() => toggleColorMode()}>
			{colorMode === 'dark' ? (
				<SunIcon color="orange.400" />
			) : (
				<MoonIcon color="purple.600" />
			)}
		</Button>
	);
};

export default ToggleThemeButton;
