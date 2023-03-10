import express from 'express'
import { body } from 'express-validator'
// import { authTest, authRead, authRegister } from '#api/auth/controllers'
// import { getUserProfile } from '#api/user/controllers'
import tokenMiddleware from '#api/token/token.middleware'
import authController from '#api/auth/auth.controller'
import testController from '#api/test/test.controller'
import tokenController from '#api/token/token.controller'
import userController from '#api/user/user.controller'

const router = express.Router()

router
  .route('/auth/registration')
  .post(
    body('login').isEmail(),
    body('password').isLength({ min: 6, max: 32 }),
    authController.registration
  )

router.route('/auth/login').post(authController.login)
router.route('/auth/logout').post(authController.logout)
router.route('/auth/activation/:link').get(authController.activation)
router.route('/auth/refresh').get(tokenController.refresh)

router.route('/users').get(tokenMiddleware.validation, userController.getUsers)

router
  .route('/user/profile')
  //.get(tokenMiddleware.protect, userController.getProfile)
  .get(userController.getProfile)

router.route('/test/test').get(testController.test)
router.route('/test/error').get(testController.testError)
router.route('/test/code').get(testController.testCode)
router.route('/test/message').get(testController.testMessage)
router.route('/test/throw').get(testController.testThrow)
router.route('/test/try_catch').get(testController.testTryCatch)

//router.route('/user/profile').get(authController.getUser)

export default router
