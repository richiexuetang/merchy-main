import { gql, useQuery } from '@apollo/client'

const LevelCategoriesQuery = gql`
  query levelCategoriesQuery($level: Int) {
    levelCategories(level: $level) {
        id 
        name
        children {
            id
            name 
            children {
                id 
                name
            }
        }
    }
  }
`;

const NavMenu = () => {
    const { data, loading, error } = useQuery(LevelCategoriesQuery, {
        variables: {level: 1},
    });
    
    if (loading) return <p> Loading... </p>
    if (error) return <p>Something went wrong when getting categories</p>

    return (
        <nav> 
            <div className='block'>
                <ul className='flex justify-center'>
                    {data?.levelCategories.map(({ id, name, children }: any, i: any) => (
                    <li className='mx-4' key={i}> 
                        {name}
                        {/* {children && children.map(({name}, i: any) => (
                            <div className='pl-10' key={i}> 
                                {name}
                            </div>
                        )) } */}
                    </li>
            ))}
            </ul>
            </div>
        </nav>
    )
}

export default NavMenu;