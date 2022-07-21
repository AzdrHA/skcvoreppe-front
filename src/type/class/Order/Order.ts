export interface Order {
  mount: number
  extern_id: string
  extern_payment_intent_id: string
  id: number
  paymentStatus: string
  status: string
  createdAt: Date
  updateAt: Date
}
