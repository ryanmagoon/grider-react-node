import { Box, Button, Heading, Flex, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../app/hooks'

const Header = (props: ComponentProps<typeof Flex>) => {
  const user = useAppSelector((state) => state.auth.value)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center">
        <Link to={user ? '/surveys' : '/'}>
          <Heading as="span" size="lg" letterSpacing="tighter">
            Emaily
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      {/* <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>Docs</Text>
        <Text>Examples</Text>
        <Text>Blog</Text>
      </Stack> */}

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        {user ? (
          <a href="/api/logout">Logout</a>
        ) : (
          <a href="/auth/google">Login with Google</a>
        )}
      </Box>
    </Flex>
  )
}

export default Header
