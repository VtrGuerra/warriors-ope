import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "login" */ 'containers/LoginPage'),
)

export default dynamic
