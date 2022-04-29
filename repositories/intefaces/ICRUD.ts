export interface ICRUD<T> {
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    findOne(id: string): Promise<T>;
}