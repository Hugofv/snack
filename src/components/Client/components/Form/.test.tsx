import Form from '../Form'
import { Provider } from 'react-redux'
import React from 'react'
import configureMockStore from 'redux-mock-store'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

const store = mockStore({
  client: {
    clients: []
  },
  error: false,
  loading: false
})

describe('Form Component', () => {

  let props = {
    client: {
      clients: []
    },
    loading: false
  } as any

  test('renders the component', () => {
    const { getByTestId } = render(<Provider {...{ store }}><Form {...props} /></Provider>)

    expect(getByTestId('form')).toBeInTheDocument()
  })

  test('handle "submit" sucess', () => {
    props = {
      ...props,
      createClient: jest.fn(),
      values: {
        name: '', document: '', type: 'individual'
      },
      touched: {},
      errors: {},
      resetForm: jest.fn(),
      setFieldValue: jest.fn(),
      handleSubmit: jest.fn(),
      withFormik: jest.fn(),
    }
    const { container, getByTestId, getByText } = render(<Provider {...{ store }}><Form {...props} /></Provider>)

    fireEvent.change(container.querySelector('input[name=name]'), { target: { value: 'Teste', name: 'name' } })
    fireEvent.change(container.querySelector('input[name=document]'), { target: { value: '5111515', name: 'document' } })
    fireEvent.change(getByText('Business'))
    fireEvent.submit(getByTestId('form'))
    fireEvent.click(getByText('Salvar'))
  })
})