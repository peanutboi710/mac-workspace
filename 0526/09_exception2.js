class MyError extends Error {}

try {
    throw new MyError ("error");
} catch (e) {
    console.log(e);
//    throw e;
}

function f() {
    throw new Error("f2 Error");
    return true;
}
try {
    console.log("f", f());
} catch (e) {
    console.log(e);
}

try {
    console.log(1);
    a.a;
    console.log(2);
} finally {
    console.log("finally");
}

function ff() {
    try {
        if (Math.random() >= 0.5) {
            a.a;
        }
        const ccc = 0;
        return "TRY return";
    } catch (e) {
        return "CATCH return";
    } finally {
        return "FINALLY";
    }
    //  finally 에서는 return 쓰지 말라고 권장
}