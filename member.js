function skillsMember(member) {
    return {
        ...member,
        skills: calculateNumbers(member.var1, member.var2)
    };
}