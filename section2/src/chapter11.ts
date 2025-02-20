/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온
 */

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
    // 이 로직만 보면 user가 각각 어떤 타입인지 알기가 어려움
    // if ("kickCount" in user) {
    //     user.kickCount;
    // } else if ("point" in user) {
    //     user.point;
    // } else {
    //     user.visitCount;
    // }
    if (user.tag === "ADMIN") {
        user.kickCount;
    } else if (user.tag === "MEMBER") {
        user.point;
    } else {
        user.visitCount;
    }
}

/**
 * 비동기 처리
 */

type LoadingTask = {
    state: "LOADING";
};

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};

// type AsyncTask = {
//     state: "LOADING" | "FAILED" | "SUCCESS";
//     error?: {
//         message: string;
//     };
//     response?: {
//         data: string;
//     };
// };

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processAsyncTask(task: AsyncTask) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생 " ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 " ${task.response.data}`);
            break;
        }
    }
}

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "네트워크 에러"
    }
};

const loading: AsyncTask = {
    state: "LOADING"
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터"
    }
};
