import { api } from "@/lib/axios"

export async function getAllProducts() {
  const response = await api.get(`/products/me`)
  return response.data
}