import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import TweetForm from 'src/components/TweetForm/TweetForm'
import { Box } from 'src/styles/Box/Box.styled'
import { Center } from 'src/styles/Center/Center.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import { Header, Button, ToolTip } from './TwitterLayout.styled'

type TwitterLayoutProps = {
  children?: React.ReactNode
}

const TwitterLayout = ({ children }: TwitterLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [toolTip, toogleToolTip] = React.useState(false)

  return (
    <Box style={{ position: 'relative' }} $borderThickness="0">
      <Toaster />
      <Cluster
        style={{
          border: `1px solid black`,
          padding: '0.75rem',
          backgroundColor: '#fff',
          position: 'sticky',
          top: '0',
          zIndex: '1',
        }}
        justify="space-between"
        as="nav"
      >
        <header>
          <Link to={routes.home()}>
            <Header>Twitter</Header>
          </Link>
        </header>
        <Cluster>
          <Box padding="0.8">Home</Box>
          <Box padding="0.8">Messages</Box>
          <Box padding="0.8">Notifications</Box>
          {currentUser ? (
            <Button
              as="button"
              onClick={() => toogleToolTip(!toolTip)}
              padding="0.8"
            >
              {isAuthenticated ? `${currentUser.email}` : `Login`}
              {toolTip && <ToolTip onClick={() => logOut()}>Logout</ToolTip>}
            </Button>
          ) : (
            <Box padding="0.8">
              <Link style={{ textDecoration: 'none' }} to={routes.login()}>
                Login
              </Link>
            </Box>
          )}
        </Cluster>
      </Cluster>
      <Center style={{ marginTop: 'var(--s0)' }} as="main">
        <Stack>
          <TweetForm />
          {children}
        </Stack>
      </Center>
    </Box>
  )
}

export default TwitterLayout
