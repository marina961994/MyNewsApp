import { SafeAreaComponent } from '../../../utils/safe-area.component'
import { SearchComponent } from '../components/Search.component'
import { NewsList } from '../components/NewsList.component'

import { useApi } from '../../../hooks/useApi';

export const NewsScreen = ({ navigation }) => {

    const { articles, isLoading, error } = useApi();

    return (
        <SafeAreaComponent>
            <SearchComponent />

            {articles && <NewsList
                newsData={articles}
                navigation={navigation}
                isLoading={isLoading}
            />}
        </SafeAreaComponent>
    )
}

