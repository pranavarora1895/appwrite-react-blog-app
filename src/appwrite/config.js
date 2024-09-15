/* eslint-disable no-useless-catch */
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, {
                title,
                content,
                featuredImage,
                status,
                userID
            })
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, {
                title,
                content,
                featuredImage,
                status,
            })

        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug);
            return true
        } catch {
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )

        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseID, conf.appwriteCollectionID, queries)
        } catch (error) {
            console.log("Appwrite Error: getPosts: error: ", error)
            return false
        }
    }

    // file upload

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketID, ID.unique(), file)
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketID, fileId)
            return true
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketID, fileId)
        } catch (error) {
            throw error;
        }
    }


}

const service = new Service();


export default service;