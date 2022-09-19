//* Tipagem explícita */
function showTicket(user: string, ticket: number) {
	console.log(
		`Olá ${user ?? 'Usuário Padrão'}. Seu número de bilhete é ${ticket}`
	)
}

showTicket('Marcel', 123)

// ====================================================================

//* Any */
let info: any

info = [1, 2, 3]
info = 'Marcel'
info = true
info = 10.5

function sumAny(a: any, b: any) {
	return a + b
}

sumAny(1, 2) // 4
sumAny('1', 3) // 13 (concatenação)

// ===================================================================

//* Inferência de Tipos */
let user_1: string = 'Marcel'
let user_2 = 'MARCEL'

user_1 = 'marcel'

// ==================================================================

//* Tipos Primitivos */
let loading: boolean
loading = false

let email: string
email = 'qualquer.coisa@email.com'

let price: number
price = 150

// =================================================================

//* Matrizes */
let numbersArray: number[]
numbersArray = [1, 2, 3, 4, 5, 6, 7, 8]

let usersArray: Array<string>
usersArray = ['Marcel', 'Michel', 'Munir']

// =================================================================

//* Funções */
function showMessage(message: string) {
	console.log(message)
} // void

function show(message: string) {
	return message
} // string

// =================================================================

//* Union */
function printUserID(id: number | string) {
	console.log(`O ID do usuário é ${id}`)
}

printUserID('101')
printUserID(101)

// =================================================================

//* Generics */
function useState<T>() {
	let state: T

	function get() {
		return state
	}

	function set(newValue: T) {
		state = newValue
	}

	return { get, set }
}

let newState = useState()
newState.get()
newState.set('João')
newState.set(123)

// =================================================================

//* Type */
type IdType = string | number | undefined

let userId: IdType
let adminId: IdType

userId = 1
userId = '1'
userId = undefined

adminId = '10'
adminId = undefined
adminId = 10

// =================================================================

//* Type Assertions */
type UserResponse = {
	id: number
	name: string
	avatar: string
}

let userResponse = {} as UserResponse
userResponse.avatar
userResponse.id
userResponse.name

// =================================================================

//* Objetos */
type Point = { x: number; y: number }

function printCoords(points: Point) {
	console.log(`o eixo X é: ${points.x}`)
	console.log(`o eixo y é: ${points.y}`)
}

printCoords({ x: 101, y: 50 })

// =================================================================

//* Opcional => ? */
type User = {
	name: string
	email: string
	age: number
	isAdmin?: boolean // isAdmin não terá declaração obrigatória
}

let nUser: User = {
	name: 'João',
	email: 'joão@example.com',
	age: 30
}

// =================================================================

//* Intersecção de Tipos */
type eUser = {
	id: number
	name: string
}

type eChar = {
	nickname: string
	level: number
}

type PlayerInfo = eUser & eChar

let eInfo: PlayerInfo = {
	id: 123456,
	name: 'João',
	nickname: 'zim',
	level: 999999
}

// =================================================================

//* Interface */
interface YUser {
	id: number
	name: string
}

let newUser: YUser = {
	id: 1,
	name: 'João'
}

function registerNewUser(newUser: YUser) {
	newUser.id
	newUser.name
}

// =================================================================

//* Type e Interface */
type TUser = {
	id: number
	name: string
}

type TPayment = {
	method: string
}

// Fazendo união com Type
type TAccount = TUser & TPayment

interface IUser {
	id: number
	name: string
}

interface IPayment {
	method: string
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}
