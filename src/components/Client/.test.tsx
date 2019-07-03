import Client from '../Client'
import { Provider } from 'react-redux'
import React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

const store = mockStore({
  client: {
    clients: []
  },
  error: false,
  loading: false
})

describe('App connected', () => {

  let props = {
    client: {
      clients: []
    }
  }
  test('renders the component', () => {
    const { getByTestId } = render(<Provider {...{ store }}><Client {...props} /></Provider>)

    expect(getByTestId('client')).toBeInTheDocument()
  })
})