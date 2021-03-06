import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import Products from './components/Products'
import {
  deleteProduct,
  getCategories,
  getProducts,
  getProductsByField,
} from './meta/actions'
import { selectCategories, selectProducts } from './meta/selectors'

const mapStateToProps = (state) => ({
  formFields,
  categories: selectCategories(state),
  products: selectProducts(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetCategories: () => dispatch(getCategories()),
  dispatchGetProducts: () => dispatch(getProducts()),
  dispatchDeleteProduct: (payload) => dispatch(deleteProduct(payload)),
  dispatchGetProductsByField: (payload) =>
    dispatch(getProductsByField(payload)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchProductForm = reduxForm({ validate, form: 'searchProduct' })

export default compose(withConnect, searchProductForm)(Products)
