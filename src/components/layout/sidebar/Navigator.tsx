const Navigator = ({ children }: React.PropsWithChildren) => {
    return (
        <nav className="flex flex-col items-center justify-center gap-4 md:gap-8">
            {children}
        </nav>
    );
}


export default Navigator;