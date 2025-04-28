import { api } from '@/lib/axios'

export async function getSoldProducts() {
  const response = await api.get(`/sellers/metrics/products/sold`)
  return response.data
}


export async function getProductsAvailable() {
  const response = await api.get(`/sellers/metrics/products/available`)
  return response.data
}

export async function getViews() {
  const response = await api.get(`/sellers/metrics/views`)
  return response.data
}

export async function getViewsByDay() {
  const response = await api.get(`/sellers/metrics/views/days`)
  return response.data
}

export async function getViewsByProductId({productId}: {productId: string}) {
  const response = await api.get(`/products/${productId}/metrics/views`)
  return response.data
}