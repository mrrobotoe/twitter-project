import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { Box } from 'src/styles/Box/Box.styled'
import { Center } from 'src/styles/Center/Center.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'

import { Header } from './TwitterLayout.styled'
type TwitterLayoutProps = {
  children?: React.ReactNode
}

const TwitterLayout = ({ children }: TwitterLayoutProps) => {
  return (
    <Box $borderThickness="0">
      <Toaster />
      <Cluster justify="space-between" as="nav">
        <header>
          <Link to={routes.home()}>
            <Header>Twitter</Header>
          </Link>
        </header>
        <Cluster>
          <Box padding="0.8">Home</Box>
          <Box padding="0.8">Messages</Box>
          <Box padding="0.8">Notifications</Box>
          <Box padding="0.8">Profile</Box>
        </Cluster>
      </Cluster>
      <Center style={{ marginTop: 'var(--s0)' }} as="main">
        {children}
      </Center>
    </Box>
  )
}

export default TwitterLayout
