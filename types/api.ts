export interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

export interface OrderAnalysis {
  orderNum: number;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
}

export interface NewsCategory {
  id: string;
  name: string;
}

export interface PaginatedNews {
  records: Article[];
  total: number;
}

export interface PaymentChannel {
  id: number;
  name: string;
}

export interface ChannelDto {
  id: number;
  name: string;
}

export interface PayChannel {
  payments: PaymentChannel[];
  channelDto: ChannelDto;
}

export interface Currency {
  id: number;
  name: string;
  symbol: string;
}

export interface Good {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface GoodsReviewOverview {
  averageRating: number;
  totalReviews: number;
}

export interface GoodsId {
  goodsId: string;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  username: string;
  date: string;
}

export interface PaginatedReviews {
  records: Review[];
  total: number;
}

export interface Sku {
  id: string;
  name: string;
  price: string;
}

export interface GoodsDetail {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface UploadedFile {
  url: string;
}

export interface IdentityVerification {
  realName: string;
  idCard: string;
  frontImg: string;
  backImg: string;
}

export interface OrderItem {
  goodsId: string;
  quantity: number;
}

export interface OrderDetail {
  id: string;
  status: string;
  totalAmount: number;
  items: OrderItem[];
  game: string;
  productName: string;
  productImage: string;
  server: string;
  uid: string;
  amount: string;
  paymentMethod: string;
  date: string;
  orderNumber: string;
}

export interface Passcode {
  passcode: string;
}

export interface Coupon {
  discount: number;
  couponId: string;
}

export interface ValidateRechargeAccount {
  isValid: boolean;
}

export interface CreateAndRegisterResponse {
  token: string;
  needVerifyEmail: boolean;
  orderId: string;
}

export interface BalanceRecord {
  id: string;
  amount: number;
  type: string;
  date: string;
}

export interface PaginatedBalance {
  records: BalanceRecord[];
  total: number;
}
