import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectID)
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.loginAccount({ email, password })
            }
            else return userAccount
        } catch (error) {
            throw error;
        }

    }

    async loginAccount({ email, password }) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.get()
        } catch (error) {
            throw error;
        }

        // eslint-disable-next-line no-unreachable
        return null

    }

    async logoutAccount() {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;

        }
    }


}

const authService = new AuthService()

export default authService;