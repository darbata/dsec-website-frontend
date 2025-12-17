export default function AnnouncementBanner() {

    // ? maybe use context here in future if this message is fetched
    const announcement = "Join us in T1 during the O-week stall. Play games, win prizes, and take a gift hamper for your membership.";

    return (
        <div className="flex justify-center px-12 h-12 w-full items-center bg-primary z-20 top-0 left-0">
            <p className="font-sans truncate text-nowrap max-w-[1280px] text-sm sm:text-base">
                {announcement}
            </p>
        </div>
    )
}