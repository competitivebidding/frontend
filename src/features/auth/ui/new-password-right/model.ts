// import {attach, createEvent, createStore, sample, combine} from 'effector';

// export const passwordChanged = createEvent<string>()
// export const repeatPasswordChanged = createEvent<string>()

// export const $passwordError = createStore<null | 'empty' | 'invalid'>(null)
// export const $newPassword = createStore<string>('')
// export const $repeatNewPassword = createStore<string>('')

// export const $password = combine([$newPassword, $repeatNewPassword])

// $newPassword.on(passwordChanged, (_, password) => password)
// $repeatNewPassword.on(repeatPasswordChanged, (_, password) => password)
