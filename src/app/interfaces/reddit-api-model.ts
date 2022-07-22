export interface Post {
    kind: string;
    data: PostData;
}

export interface PostData {
    after:      string;
    dist:       number;
    modhash:    string;
    geo_filter: null;
    children:   Child[] | null;
    before:     null;
}

export interface Child {
    data: ChildData;
}

export interface ChildData {
    title:      string;
    thumbnail:  string;
}