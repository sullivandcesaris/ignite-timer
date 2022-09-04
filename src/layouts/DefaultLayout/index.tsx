import { Outlet } from 'react-router-dom'
import { Header } from '../../componentes/Header/index'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
