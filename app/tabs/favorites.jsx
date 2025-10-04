import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeft, ShoppingCart } from 'lucide-react-native'
import { useRouter } from 'expo-router'
import MasonryList from '@react-native-seoul/masonry-list'
import React from 'react'
import ProductCard from '../components/ProductCard'
import useIconStore from '../stores/iconStore'

const favorites = () => {
  const router = useRouter()
  const { favorites } = useIconStore()

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ChevronLeft size={24} color="#000" strokeWidth={1} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <TouchableOpacity style={styles.cartButton}>
          <ShoppingCart size={24} color="#000" strokeWidth={1} />
        </TouchableOpacity>
      </View>

      {/* Items Count */}
      <View style={styles.itemsCountContainer}>
        <Text style={styles.itemsCountText}>Items({favorites.length})</Text>
      </View>

      {/* Products Grid */}
      <MasonryList
        data={favorites}
        numColumns={2}
        contentContainerStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              sizePrices={item.sizePrices}
              type={item.type}
              rating={item.rating}
              reviews={item.reviews}
              description={item.description}
              storeName="Wishlist Store"
            />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your wishlist is empty</Text>
            <Text style={styles.emptySubText}>Add items you love to see them here</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsCountContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemsCountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
  },
  productContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
})

export default favorites