import {attach, createEvent, createStore, sample, combine} from 'effector';

export const passwordChanged = createEvent<string>()
export const repeatPasswordChanged = createEvent<string>()
export const usernameChanged = createEvent<string>()
export const emailChanged = createEvent<string>()
export const referrerIdChanged = createEvent<string>()

export const $passwordError = createStore<null | 'empty' | 'invalid'>(null)
export const $password = createStore<string>('')
export const $repeatPassword = createStore<string>('')
export const $username = createStore<string>('')
export const $email = createStore<string>('')
export const $referrerId = createStore<string>('')

// export const $password = combine([$newPassword, $repeatNewPassword])

$password.on(passwordChanged, (_, password) => password)
$repeatPassword.on(repeatPasswordChanged, (_, password) => password)
$username.on(usernameChanged, (_, username) => username)
$email.on(emailChanged, (_, email) => email)
$referrerId.on(referrerIdChanged, (_, referrerId) => referrerId)

