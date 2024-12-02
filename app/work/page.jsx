export default function Work() {
    return (
        <main className="flex flex-col ">
            <Section1 />
            <Section2 />
        </main>
    );
}

function Section1() {
    return (
        <section className="h-screen w-full  flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-[#040404]">
            <h1>Work Page</h1>
        </section>
    );
}

function Section2() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-orange-600">
            <h1>Work Page</h1>
        </section>
    );
}